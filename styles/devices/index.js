const sizes = {
  mobileSmall: '320px',
  mobileMedium: '375px',
  mobileLarge: '575px',
  tablet: '700px',
  laptop: '992px',
  laptopLarge: '1180px',
  desktop: '1520px',
  desktopLarge: '1800px',
}

export const devices = {
  mobileSmall: `(max-width: ${sizes.mobileSmall})`,
  mobileMedium: `(max-width: ${sizes.mobileMedium})`,
  mobileLarge: `(max-width: ${sizes.mobileLarge})`,
  tablet: `(max-width: ${sizes.tablet})`,
  laptop: `(max-width: ${sizes.laptop})`,
  laptopLarge: `(max-width: ${sizes.laptopLarge})`,
  desktop: `(max-width: ${sizes.desktop})`,
  desktopLarge: `(max-width: ${sizes.desktopLarge})`,
}
