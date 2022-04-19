import { FC } from 'react'
import css from './{{ pascalCase name }}.module.scss'

interface {{ pascalCase name }}Props {

}

export const {{ pascalCase name }}: FC<{{ pascalCase name }}Props> = (props) => (
  <div className={css.root}>
    <h3>{{ pascalCase name }}</h3>
  </div>
)
