import { useEffect } from "react"

/**
 * Injeta CSS variáveis da 4Life no admin do Medusa.
 *
 * Estratégia:
 * - Cria um único <style> com id "fl-theme-override" no <head>
 * - Se já existir, não recria (evita duplicação)
 * - Sobrescreve apenas CSS vars — não toca em selectors nem layout
 *
 * Risco de manutenção:
 * - Se Medusa renomear CSS vars em versão futura, o visual volta pro default
 * - Funcionalidade não é afetada (só cores)
 * - Pinar versão (2.13.6) e testar antes de atualizar
 */
const THEME_CSS = `
/* 4Life Nutrition — admin theme override (dark mode) */
html.dark {
  /* Background — variações do marrom da marca */
  --bg-base: #2a1c17;
  --bg-subtle: #221611;
  --bg-component: #3a2a23;
  --bg-component-hover: #4a342c;
  --bg-component-pressed: #5a4036;
  --bg-base-hover: #3a2a23;
  --bg-base-pressed: #4a342c;
  --bg-subtle-hover: #2a1c17;
  --bg-subtle-pressed: #3a2a23;
  --bg-disabled: #3a2a23;

  /* Inputs / fields */
  --bg-field: rgba(236, 224, 208, 0.04);
  --bg-field-hover: rgba(236, 224, 208, 0.08);
  --bg-field-component: #2a1c17;
  --bg-field-component-hover: #3a2a23;

  /* Accent — verde da marca substitui o azul padrão */
  --bg-interactive: #6a714e;
  --border-interactive: #6a714e;
  --fg-interactive: #8d9470;
  --fg-interactive-hover: #a8ad8c;
  --bg-highlight: rgba(106, 113, 78, 0.15);
  --bg-highlight-hover: rgba(106, 113, 78, 0.25);

  /* Foreground — texto bege sobre fundo marrom */
  --fg-base: #ece0d0;
  --fg-subtle: rgba(236, 224, 208, 0.7);
  --fg-muted: rgba(236, 224, 208, 0.5);
  --fg-disabled: rgba(236, 224, 208, 0.3);

  /* Bordas */
  --border-base: rgba(236, 224, 208, 0.08);
  --border-strong: rgba(236, 224, 208, 0.16);
  --border-menu-bot: rgba(236, 224, 208, 0.08);
  --border-menu-top: #3a2a23;

  /* Switches / toggles */
  --bg-switch-off: #3a2a23;
  --bg-switch-off-hover: #5a4036;
}
`

export const ThemeOverride = () => {
  useEffect(() => {
    const STYLE_ID = "fl-theme-override"
    if (document.getElementById(STYLE_ID)) return

    const style = document.createElement("style")
    style.id = STYLE_ID
    style.textContent = THEME_CSS
    document.head.appendChild(style)
  }, [])

  return null
}

export default ThemeOverride
