export function findButtonStyle(style) {
    switch (style) {
        case 'primary':
            return {
                background: `#F4B860`,
                color: `#403926`,
                border: `none`
            }
        case 'secondary':
            return {
                background: `#6B7346`,
                color: `#F4B860`,
                border: `2px solid #F4B860`
            }
        default:
            return {
                background: `black`,
                color: `white`,
                border: `blue`
            }
    }
}