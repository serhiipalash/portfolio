/*
 *
 * Service List Item
 *
 */

import { h, Component } from 'preact'
import PropTypes from 'prop-types'

import './style.css'

export default class ServiceListItem extends Component {
  static propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    icon: PropTypes.element,
  }

  render() {
    const { title, description, icon } = this.props

    return (
      <div className="service-list-item">
        <div className="service-list-item__icon">{icon}</div>
        <div className="service-list-item__title">{title}</div>
        {window.innerWidth > 767 ? (
          <div
            className="service-list-item__description"
            dangerouslySetInnerHTML={{
              __html: description.replace(/\r?\n|\r/g, '<br />'),
            }}
          />
        ) : (
          <div className="service-list-item__description">{description}</div>
        )}
      </div>
    )
  }
}
