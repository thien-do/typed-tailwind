export const sampleConfig = `module.exports = {
  prefix: '',
  important: false,
  separator: '_',
  theme: {
    screens: { sm: '640px' },
    colors: {
      white: '#fff',
      gray: { 1: '#f7fafc', 2: '#a0aec0', 3: '#1a202c' },
      blue: { 1: '#ebf8ff', 2: '#4299e1', 3: '#2a4365' },
    },
  },
  variants: {
    textColor: ['hover'],
  },
  corePlugins: [
    'textColor',
    'display',
  ],
  plugins: [],
};`
