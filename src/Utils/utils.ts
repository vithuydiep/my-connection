import { FocusEvent } from 'react';
import { generate } from 'randomized-string'


export const scrollIntoView = (
  e:
    | FocusEvent<HTMLInputElement, Element>
    | FocusEvent<HTMLTextAreaElement, Element>
) =>
  e.target.scrollIntoView({
    behavior: 'smooth',
    block: 'center',
    inline: 'start',
  });


  export const randomFromString = (input: string, length: number): string => {
    const rand = generate(length)
    return `${input}-${rand}`
  }
  