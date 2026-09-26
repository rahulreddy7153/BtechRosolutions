import { useReveal } from '../hooks/useReveal'

export default function Reveal({ as: Tag = 'div', className = '', style, children, ...rest }) {
  const ref = useReveal()
  return (
    <Tag ref={ref} className={`reveal ${className}`} style={style} {...rest}>
      {children}
    </Tag>
  )
}
