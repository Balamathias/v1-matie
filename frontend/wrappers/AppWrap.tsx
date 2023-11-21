import { NavigationDots, SocialMedia } from '@/components'

const AppWrap = (Component: any, idName: string, classNames?: string) => function HOC(): React.ReactElement {
  return (
    <div id={idName} className={`${classNames} relative`}>
      <SocialMedia />
      <div className="h-full flex w-full flex-col gap-7">
        <Component />
      </div>
      <NavigationDots active={idName} />
    </div>
  )
}

export default AppWrap