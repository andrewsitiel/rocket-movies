import { Anchor } from "./styles";

export function Link ({title, icon: Icon, href}) {
  return(
    <Anchor to={href}>
      {Icon && <Icon/>}
     <span>{ title }</span>
    </Anchor>
  )
}