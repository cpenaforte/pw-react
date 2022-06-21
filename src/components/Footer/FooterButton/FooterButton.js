const FooterButton = (props) => {
  const { rel, href, target, name, className } = props;

  return(
    <a className={className} rel={rel} href={href} target={target}>{name}</a>
  )
}

export default FooterButton