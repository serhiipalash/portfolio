/*
 *
 * Preloader
 *
 */

import { h, Component } from 'preact'

import PropTypes from 'prop-types'

import { isFunction } from 'lodash'

import $ from 'jquery'
import 'gsap/TweenMax'
import '@/vendor/cooltext/cooltext.animations.js'
import '@/vendor/cooltext/cooltext.min.js'

import './style.css'

export default class Preloader extends Component {
  static propTypes = {
    onCompleteStep: PropTypes.func,
  }

  componentDidMount() {
    let elem = $('.home-page-preloader__text')

    elem.cooltext({
      sequence: [
        {
          action: 'animation',
          animation: 'cool12',
          onComplete: this._onCompleteAnimationStep,
        },
        {
          action: 'animation',
          animation: 'cool150',
          speed: 100,
          stagger: 100,
          order: 'reverse', // animate the elements in reverse order
          onComplete: this._onCompleteAnimationStep,
        },
        {
          action: 'animation',
          animation: [
            'cool111',
            'cool112',
            'cool118',
            'cool148',
            'cool156',
            'cool187',
          ],
          stagger: 150,
          onComplete: this._onCompleteAnimationStep.bind(null, { final: true }),
        },
      ],
    })
  }

  _onCompleteAnimationStep = ({ final } = {}) => {
    this.isFinished = final

    if (isFunction(this._onAnimationEndCallback)) {
      this._onAnimationEndCallback()
      this._onAnimationEndCallback = null
    }
  }

  isAnimationFinished = () => {
    return this.isFinished
  }

  setAnimationEndCallback = cb => {
    this._onAnimationEndCallback = cb
  }

  render() {
    return (
      <div className="home-page-preloader">
        <div className="home-page-preloader__text">Magic is happening</div>
      </div>
    )
  }
}
