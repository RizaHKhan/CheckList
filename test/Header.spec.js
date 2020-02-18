import Header from '@/components/include/Header.vue'
import { mount } from '@vue/test-utils'

describe('Logo', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Header)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
