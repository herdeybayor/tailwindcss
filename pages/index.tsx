import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react'
import Switch from 'react-switch'
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs'
import Profile from '../components/Profile'
import { useTheme } from 'next-themes'

const Home: NextPage = () => {
  const [checked, setChecked] = useState(false)

  const { theme, setTheme } = useTheme()

  const handleThemeChange = () => {
    setChecked(!checked)
    if (checked) {
      setTheme('light')
    } else {
      setTheme('dark')
    }
  }
  return (
    <div className="">
      <Head>
        <title>Tailwind App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="absolute top-2 right-2">
        <Switch
          offColor="#777"
          onColor="#000"
          checkedIcon={
            <BsFillSunFill className="absolute right-1 top-1 text-white" />
          }
          uncheckedIcon={
            <BsFillMoonFill className="absolute right-1 top-1 text-white" />
          }
          onChange={handleThemeChange}
          checked={checked}
        />
      </div>

      <Profile />
      <div className="flex justify-center gap-x-5 p-10">
        <button className="btn btn--primary">Create new Todo</button>
        <button className="btn">Help</button>
      </div>
    </div>
  )
}

export default Home
