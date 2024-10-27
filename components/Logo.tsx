'use client'

import Image from '@/components/Image'
// import Logo from '@/data/logo.svg'
import BlogLogo from '@/data/blogLogo.png'
import BlogLogoWhite from '@/data/blogLogo_white.png'
import { useTheme } from 'next-themes'

const Logo = () => {
  const { theme } = useTheme()

  return (
    <div className="mr-3">
      {/* <Logo /> */}
      <Image
        alt="logo"
        src={{ light: BlogLogo, dark: BlogLogoWhite }[theme || 'light']}
        // src={BlogLogoWhite}
        width={200}
      />
    </div>
  )
}

export default Logo
