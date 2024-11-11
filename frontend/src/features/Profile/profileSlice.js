import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    firstName: "",
    lastName: "",
    email: "",
    about: "",
    imageUrl: "",
    googleId: ""
  }
}

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setFirstName: (state, action) => {
      state.user.firstName = action.payload
    },
    setLastName: (state, action) => {
      state.user.lastName = action.payload
    },
    setAbout: (state, action) => {
      state.user.about = action.payload
    },
    setImageUrl: (state, action) => {
      state.user.imageUrl = action.payload
    },
    setGoogleId: (state, action) => {
      state.user.googleId = action.payload
    },
    setUserObj: (state, action) => {
      
      state.user = {
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        email: action.payload.email,
        about: action.payload.about,
        imageUrl: action.payload.imageUrl,
        googleId: action.payload.googleId
      }
    }
  }
})

export const { setFirstName, setLastName, setEmail, setAbout, setImageUrl, setGoogleId, setUserObj } = profileSlice.actions

export default profileSlice.reducer