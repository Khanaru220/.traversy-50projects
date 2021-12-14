


https://user-images.githubusercontent.com/74447462/146010489-d514023b-5a10-40a1-8ec6-c54b1e52c836.mp4




## Forget:

- Use flex as fraction for invidual element:

  - Flex not just flex:1 or flex-grow:1 -- give similar space for element
  - Flex can be flex:5 ; flex:0.5 -- give differents space between elements

- Define delay for transition:
  - (e.g. transition: opacity 1s 0.8s;)
  - create effect "not start effect until one element finish its effect"

## New:

- In bakcground: url()

  - background-position, background-size don't work
  - Solution: using background-image:

- display:none don't work with animation, transition -- to take the space

  - Solution: setTimeout in JS

- animation run each time display change:

  - Work w# JS, we don't need specify delay-time in CSS

- Media queries can change @keyframes

- Animation-duration not exactly time with setTimeout in JS

## Practice:

- Use e.target work smoothly
