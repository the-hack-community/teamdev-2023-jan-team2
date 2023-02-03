import ellipsis from './ellipsis'

describe('文字列が指定の長さを超えた場合、...を付与する', () => {
  it('文字列が指定した長さより短い場合', () => {
    expect(ellipsis('hello', 2)).toEqual('he...')
  })

  it('文字列が指定した長さより長い場合', () => {
    expect(ellipsis('hello', 10)).toEqual('hello')
  })

  it('長さが-であった場合', () => {
    expect(ellipsis('hello', -1)).toEqual('hello')
  })

  it('文字列が空であった場合', () => {
    expect(ellipsis('', 10)).toEqual('')
  })

  it('長さが0であった場合', () => {
    expect(ellipsis('hello', 0)).toEqual('hello')
  })

  it('文字列が全角文字であった場合', () => {
    expect(ellipsis('こんにちは', 2)).toEqual('こん...')
  })
})
