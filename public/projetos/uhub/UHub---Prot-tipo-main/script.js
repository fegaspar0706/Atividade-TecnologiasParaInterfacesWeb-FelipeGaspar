(function () {
    'use strict';

    const $ = (selector, root = document) => root.querySelector(selector);
    const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));

    function toast(message) {
        const old = $('.uhub-toast');
        if (old) old.remove();

        const el = document.createElement('div');
        el.className = 'uhub-toast';
        el.textContent = message;
        document.body.appendChild(el);

        setTimeout(() => {
            el.classList.add('is-leaving');
            setTimeout(() => el.remove(), 260);
        }, 2300);
    }

    function setButtonState(button, activeText, inactiveText) {
        const active = button.dataset.active === 'true';
        button.dataset.active = String(!active);
        button.textContent = active ? inactiveText : activeText;
        toast(active ? 'Ação desfeita.' : 'Pronto! Atualizado no protótipo.');
    }

    function initFollowButtons() {
        $$('.follow').forEach((button) => {
            button.type = 'button';
            button.addEventListener('click', () => setButtonState(button, 'Seguindo', 'Seguir'));
        });
    }

    function initLogoutButtons() {
        $$('.logout-btn, .btn-logout').forEach((button) => {
            button.type = 'button';
            button.addEventListener('click', () => {
                toast('Sessão encerrada no protótipo.');
                setTimeout(() => { window.location.href = 'index.html'; }, 550);
            });
        });
    }

    function initSearch() {
        const input = $('.search-box input');
        if (!input) return;

        const items = $$('.post-card, .suggest-card, .categories a, .community-box p');
        input.addEventListener('input', () => {
            const term = input.value.trim().toLowerCase();
            items.forEach((item) => {
                const text = item.textContent.toLowerCase();
                item.style.display = !term || text.includes(term) ? '' : 'none';
            });
        });
    }

    function initImagePreview() {
        $$('input[type="file"][accept*="image"]').forEach((input) => {
            input.addEventListener('change', () => {
                const file = input.files && input.files[0];
                const holder = input.closest('.profile-avatar, .avatar-upload');
                if (!file || !holder) return;

                const reader = new FileReader();
                reader.onload = () => {
                    holder.style.backgroundImage = `url('${reader.result}')`;
                    holder.classList.add('has-image');
                    toast('Imagem aplicada ao protótipo.');
                };
                reader.readAsDataURL(file);
            });
        });
    }

    function initPasswordHelpers() {
        $$('input[type="password"]').forEach((input, index) => {
            const wrap = document.createElement('div');
            wrap.style.position = 'relative';
            input.parentNode.insertBefore(wrap, input);
            wrap.appendChild(input);

            const btn = document.createElement('button');
            btn.type = 'button';
            btn.textContent = 'Mostrar';
            btn.setAttribute('aria-label', 'Mostrar ou ocultar senha');
            btn.style.cssText = 'position:absolute;right:10px;top:50%;transform:translateY(-50%);border:0;background:transparent;color:var(--purple);font-weight:800;cursor:pointer;padding:6px;';
            input.style.paddingRight = '88px';
            wrap.appendChild(btn);

            btn.addEventListener('click', () => {
                const showing = input.type === 'text';
                input.type = showing ? 'password' : 'text';
                btn.textContent = showing ? 'Mostrar' : 'Ocultar';
            });

            if (index === 0 && (document.title.includes('Redefinição') || document.title.includes('Cadastro'))) {
                const hint = document.createElement('small');
                hint.textContent = 'Use pelo menos 8 caracteres.';
                hint.style.cssText = 'display:block;margin:-4px 0 4px;color:var(--text-light);font-weight:600;';
                wrap.insertAdjacentElement('afterend', hint);
            }
        });
    }


    function initPasswordMatchValidation() {
        $$('.js-password-match-form').forEach((form) => {
            const password = $('.js-password-main', form);
            const confirm = $('.js-password-confirm', form);
            const message = $('.password-match-message', form);
            if (!password || !confirm) return;

            const validate = () => {
                const passValue = password.value.trim();
                const confirmValue = confirm.value.trim();

                password.classList.remove('is-valid', 'is-invalid');
                confirm.classList.remove('is-valid', 'is-invalid');
                if (message) {
                    message.textContent = '';
                    message.className = 'password-match-message';
                }

                if (!passValue && !confirmValue) {
                    confirm.setCustomValidity('');
                    return true;
                }

                if (passValue.length > 0 && passValue.length < 8) {
                    password.classList.add('is-invalid');
                    if (message) {
                        message.textContent = 'A senha precisa ter pelo menos 8 caracteres.';
                        message.classList.add('is-error');
                    }
                    confirm.setCustomValidity('A senha precisa ter pelo menos 8 caracteres.');
                    return false;
                }

                if (confirmValue && passValue !== confirmValue) {
                    password.classList.add('is-invalid');
                    confirm.classList.add('is-invalid');
                    confirm.setCustomValidity('As senhas não conferem.');
                    if (message) {
                        message.textContent = 'As senhas não conferem.';
                        message.classList.add('is-error');
                    }
                    return false;
                }

                if (passValue && confirmValue && passValue === confirmValue) {
                    password.classList.add('is-valid');
                    confirm.classList.add('is-valid');
                    confirm.setCustomValidity('');
                    if (message) {
                        message.textContent = 'Senhas iguais.';
                        message.classList.add('is-success');
                    }
                    return true;
                }

                confirm.setCustomValidity('');
                return true;
            };

            password.addEventListener('input', validate);
            confirm.addEventListener('input', validate);
            form.addEventListener('submit', (event) => {
                if (!validate()) {
                    event.preventDefault();
                    confirm.focus();
                    toast('Confira se as senhas são iguais.');
                }
            });
        });
    }

    function initNewPostModal() {
        const newPostBtn = Array.from($$('.btn')).find((btn) => btn.textContent.trim().includes('Novo post'));
        const feed = $('.feed');
        if (!newPostBtn || !feed) return;

        newPostBtn.type = 'button';
        const modal = document.createElement('div');
        modal.className = 'uhub-modal';
        modal.hidden = true;
        modal.innerHTML = `
            <section class="uhub-modal-card" role="dialog" aria-modal="true" aria-label="Criar novo post">
                <h2>Novo post</h2>
                <textarea class="input" placeholder="O que você quer compartilhar?"></textarea>
                <div class="uhub-modal-actions">
                    <button class="btn secondary" type="button" data-close>Cancelar</button>
                    <button class="btn" type="button" data-publish>Publicar</button>
                </div>
            </section>
        `;
        document.body.appendChild(modal);

        const open = () => { modal.hidden = false; $('textarea', modal).focus(); };
        const close = () => { modal.hidden = true; $('textarea', modal).value = ''; };

        newPostBtn.addEventListener('click', open);
        $('[data-close]', modal).addEventListener('click', close);
        modal.addEventListener('click', (event) => { if (event.target === modal) close(); });
        document.addEventListener('keydown', (event) => { if (event.key === 'Escape' && !modal.hidden) close(); });

        $('[data-publish]', modal).addEventListener('click', () => {
            const text = $('textarea', modal).value.trim();
            if (!text) {
                toast('Digite algo antes de publicar.');
                return;
            }

            const article = document.createElement('article');
            article.className = 'post-card';
            article.innerHTML = `
                <div class="post-user">
                    <span class="avatar"></span>
                    <div>
                        <h3>Usuário Teste<br><small>Protótipo Uhub</small></h3>
                        <p>@usuarioteste</p>
                    </div>
                </div>
                <p class="post-text"></p>
            `;
            $('.post-text', article).textContent = text;
            const firstPost = $('.post-card', feed);
            feed.insertBefore(article, firstPost || null);
            close();
            toast('Post publicado no protótipo.');
        });
    }

    function initForms() {
        $$('form').forEach((form) => {
            form.addEventListener('submit', (event) => {
                if (!form.checkValidity()) return;
                const action = form.getAttribute('action');
                if (action && action.endsWith('.html')) {
                    event.preventDefault();
                    toast('Dados validados. Redirecionando...');
                    setTimeout(() => { window.location.href = action; }, 550);
                }
            });
        });
    }

    document.addEventListener('DOMContentLoaded', () => {
        initFollowButtons();
        initLogoutButtons();
        initSearch();
        initImagePreview();
        initPasswordHelpers();
        initPasswordMatchValidation();
        initNewPostModal();
        initForms();
    });
}());
