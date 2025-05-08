import tailwind from '@tailwindcss/postcss'
import autoprefixer from 'autoprefixer'
import postcss from 'postcss'

export default postcss([tailwind(), autoprefixer])
