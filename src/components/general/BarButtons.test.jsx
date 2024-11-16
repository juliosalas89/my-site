import { render } from "@testing-library/react"
import BarButtons from "./BarButtons"

beforeEach(() => {
  global.window.visualViewport = { width: 1024 };
});

jest.mock("next/navigation", () => ({
    useRouter () {
      return {
        prefetch: () => jest.fn(),
        push: () => jest.fn()
      }
    },
    usePathname () {
        return '/'
    }
}))

test('BarButtons', () => {
    const component = render(<BarButtons />)
    component.getAllBy('path')
    
})