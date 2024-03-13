import { expect, test, vi } from 'vitest'
import { sum, groupObjectsByStringKey } from '../function/utility'

const array = [
  {
    date: '240313',
    label: 'number1'
  },
  {
    date: '240314',
    label: 'number2'
  },
  {
    date: '240315',
    label: 'number3'
  },
  {
    date: '240316',
    label: 'number4'
  },
  {
    date: '240313',
    label: 'number5'
  },
  {
    date: '240314',
    label: 'number6'
  }
]

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3)
})

test('should group object correctly', () => {
  const result = groupObjectsByStringKey(array,'date');

  expect(result['240313']).toEqual(
    expect.objectContaining([
      {
        date: '240313',
        label: 'number1'
      },
      {
        date: '240313',
        label: 'number5'
      }
    ])
  )

})
test('should group object correctly', () => {

  const groupObjectSpy = vi.fn(groupObjectsByStringKey);
  const result = groupObjectsByStringKey(array,'date');
  expect(groupObjectSpy).toHaveReturned


})