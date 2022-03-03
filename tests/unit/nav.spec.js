import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import Nav from '@/components/Nav.vue'

describe('Nav.vue', () => {
  it('renders nav', () => {
    const wrapper = shallowMount(Nav, {
      stubs: ['router-link']
    })
    expect(wrapper.find('nav').exists()).to.equal(true)
  })
})
