import tippy from 'tippy.js'
import remote from '../dist'

const remoteContent = '<div>Remote content</div>'

jest.spyOn(global, 'fetch').mockImplementation(() => Promise.resolve({
  text: () => remoteContent
}))

test('init', () => {
  expect(true).toBe(true)
})
