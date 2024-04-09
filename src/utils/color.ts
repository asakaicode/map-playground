import { Color } from 'deck.gl'

export const hexToRgbArray = (hexColor: string) => {
  return hexColor
    .replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, (_, r: string, g: string, b: string) => '#' + r + r + g + g + b + b)
    .substring(1)
    .match(/.{2}/g)!
    .map((x) => parseInt(x, 16))
}
