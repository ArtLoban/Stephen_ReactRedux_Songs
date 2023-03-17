/**
 * Action creator
 * Used `Named Export`
 * Will be imported like this: `import { selectSong } from '../actions';`
 *
 * @param song:   Example:  `{title: 'All Star', duration: '3:15'}`
 * @returns {{payload: *, type: string}}
 */
export const selectSong = song => {
  console.log(song);

  // Return an action
  return {
    type: 'SONG_SELECTED',
    payload: song           // Сюда приходит объейт типа: `{title: 'All Star', duration: '3:15'}`
  }
};
