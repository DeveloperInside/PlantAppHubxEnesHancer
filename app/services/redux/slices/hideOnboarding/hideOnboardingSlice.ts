import { createSlice } from '@reduxjs/toolkit'
import { RootState } from 'services/redux/store'

const initialState: { hideOnboarding: boolean } = {
  hideOnboarding: false,
}

const slice = createSlice({
  name: 'hideOnboarding',
  initialState,
  reducers: {
    resetHideOnboarding: () => initialState,
    setHideOnboarding: state => {
      state.hideOnboarding = true
    },
  },
})

export const { resetHideOnboarding, setHideOnboarding } = slice.actions

export default slice.reducer

export const selectHideOnboarding = (state: RootState) =>
  state.hideOnboarding.hideOnboarding
