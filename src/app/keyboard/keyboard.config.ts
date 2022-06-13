import { KeyboardItemInterface } from '../keyboard-item/keyboard-item.interface';

export const defaultKeyboardItemConfig = {
  width: 44,
  height: 44,
  gap: 4,
};
const tabWidth = 72;
const controlWidth = 92;
const returnWidth = 108;
const leftShiftWidth = 116;
const metaWidth = 66;
const rightShiftWidth = 84;
const deleteWidth = 72;
const spaceWidth = 382;

export const hhkbKeyboardConfig: KeyboardItemInterface[][] = [
  // line1
  [
    { variant: 'one-line', line1: 'Esc', flag: ['TODO'], color: 'grey' },
    { variant: 'two-line', line1: '!', line2: '1', flag: ['TODO'] },
    { variant: 'two-line', line1: '@', line2: '2', flag: ['TODO'] },
    { variant: 'two-line', line1: '#', line2: '3', flag: ['TODO'] },
    { variant: 'two-line', line1: '$', line2: '4', flag: ['TODO'] },
    { variant: 'two-line', line1: '%', line2: '5', flag: ['TODO'] },
    { variant: 'two-line', line1: '^', line2: '6', flag: ['TODO'] },
    { variant: 'two-line', line1: '&', line2: '7', flag: ['TODO'] },
    { variant: 'two-line', line1: '*', line2: '8', flag: ['TODO'] },
    { variant: 'two-line', line1: '(', line2: '9', flag: ['TODO'] },
    { variant: 'two-line', line1: ')', line2: '0', flag: ['TODO'] },
    { variant: 'two-line', line1: '_', line2: '-', flag: ['TODO'] },
    { variant: 'two-line', line1: '+', line2: '=', flag: ['TODO'] },
    { variant: 'two-line', line1: '|', line2: '\\', flag: ['TODO'] },
    { variant: 'two-line', line1: '~', line2: '`', flag: ['TODO'] },
  ],
  // line2
  [
    {
      variant: 'one-line',
      line1: 'Tab',
      flag: ['TODO'],
      color: 'grey',
      width: tabWidth,
    },
    { variant: 'one-line', line1: 'Q', flag: ['TODO'] },
    { variant: 'one-line', line1: 'W', flag: ['TODO'] },
    { variant: 'one-line', line1: 'E', flag: ['TODO'] },
    { variant: 'one-line', line1: 'R', flag: ['TODO'] },
    { variant: 'one-line', line1: 'T', flag: ['TODO'] },
    { variant: 'one-line', line1: 'Y', flag: ['TODO'] },
    { variant: 'one-line', line1: 'U', flag: ['TODO'] },
    { variant: 'one-line', line1: 'I', flag: ['TODO'] },
    { variant: 'one-line', line1: 'O', flag: ['TODO'] },
    { variant: 'one-line', line1: 'P', flag: ['TODO'] },
    { variant: 'two-line', line1: '{', line2: '[', flag: ['TODO'] },
    { variant: 'two-line', line1: '}', line2: ']', flag: ['TODO'] },
    {
      variant: 'one-line',
      line1: 'Delete',
      flag: ['TODO'],
      color: 'grey',
      width: deleteWidth,
    },
  ],
  // line3
  [
    {
      variant: 'one-line',
      line1: 'Control',
      flag: ['TODO'],
      color: 'grey',
      width: controlWidth,
    },
    { variant: 'one-line', line1: 'A', flag: ['TODO'] },
    { variant: 'one-line', line1: 'S', flag: ['TODO'] },
    { variant: 'one-line', line1: 'D', flag: ['TODO'] },
    { variant: 'one-line', line1: 'F', flag: ['TODO'] },
    { variant: 'one-line', line1: 'G', flag: ['TODO'] },
    { variant: 'one-line', line1: 'H', flag: ['TODO'] },
    { variant: 'one-line', line1: 'J', flag: ['TODO'] },
    { variant: 'one-line', line1: 'K', flag: ['TODO'] },
    { variant: 'one-line', line1: 'L', flag: ['TODO'] },
    { variant: 'two-line', line1: ':', line2: ';', flag: ['TODO'] },
    { variant: 'two-line', line1: '"', line2: "'", flag: ['TODO'] },
    {
      variant: 'one-line',
      line1: 'Return',
      flag: ['TODO'],
      color: 'grey',
      width: returnWidth,
    },
  ],
  // line4
  [
    {
      variant: 'one-line',
      line1: 'Shift',
      flag: ['TODO'],
      color: 'grey',
      width: leftShiftWidth,
    },
    { variant: 'one-line', line1: 'Z', flag: ['TODO'] },
    { variant: 'one-line', line1: 'X', flag: ['TODO'] },
    { variant: 'one-line', line1: 'C', flag: ['TODO'] },
    { variant: 'one-line', line1: 'V', flag: ['TODO'] },
    { variant: 'one-line', line1: 'B', flag: ['TODO'] },
    { variant: 'one-line', line1: 'N', flag: ['TODO'] },
    { variant: 'one-line', line1: 'M', flag: ['TODO'] },
    { variant: 'two-line', line1: '<', line2: ',', flag: ['TODO'] },
    { variant: 'two-line', line1: '>', line2: '.', flag: ['TODO'] },
    { variant: 'two-line', line1: '?', line2: '/', flag: ['TODO'] },
    {
      variant: 'one-line',
      line1: 'Shift',
      flag: ['TODO'],
      color: 'grey',
      width: rightShiftWidth,
    },
    { variant: 'one-line', line1: 'Fn', flag: ['TODO'], color: 'grey' },
  ],
  // line5
  [
    { variant: 'one-line', line1: '⌥', flag: ['TODO'], color: 'grey' },
    {
      variant: 'one-line',
      line1: '⌘',
      flag: ['TODO'],
      color: 'grey',
      width: metaWidth,
    },
    { variant: 'one-line', line1: '', flag: ['TODO'], width: spaceWidth },
    {
      variant: 'one-line',
      line1: '⌘',
      flag: ['TODO'],
      color: 'grey',
      width: metaWidth,
    },
    { variant: 'one-line', line1: '⌥', flag: ['TODO'], color: 'grey' },
  ],
];
