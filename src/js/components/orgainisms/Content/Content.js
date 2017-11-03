/*
 *
 * Content
 *
 */

import { h, Component } from 'preact'
import PropTypes from 'prop-types'
import { connect } from 'preact-redux'

import Preloader from '@/js/components/orgainisms/Preloader'
import Footer from '@/js/components/orgainisms/Footer'
import Projects from '@/js/components/orgainisms/Projects'
import ServiceList from '@/js/components/orgainisms/ServiceList'
import Articles from '@/js/components/orgainisms/Articles'
import TopBlock from '@/js/components/orgainisms/TopBlock'
import TopPanel from '@/js/components/orgainisms/TopPanel'

import imagesLoaded from 'imagesloaded'

import './style.css'

@connect(({ app: { locale }, projects }) => ({
  locale,
  projects,
}))
export default class Content extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]),
    projects: PropTypes.object,
    preloader: PropTypes.bool,
  }

  constructor(props) {
    super(props)

    this.state = {
      preloaderIsVisible: props.preloader,
    }
  }

  componentDidMount() {
    imagesLoaded(this._content, () => {
      console.log('all images loaded')

      if (this._preloader) {
        this._preloader.setAnimationEndCallback(() => {
          this.setState({ preloaderIsVisible: false })
          setTimeout(() => {
            this._topBlock.startAnimation()
          }, 0)
        })
      }
    })
  }

  render() {
    const { preloaderIsVisible } = this.state

    return (
      <div
        ref={ref => (this._content = ref)}
        className={`content ${preloaderIsVisible
          ? 'content--preloader-is-visible'
          : ''}`}
      >
        {preloaderIsVisible ? (
          <Preloader ref={ref => (this._preloader = ref)} />
        ) : null}

        <TopBlock ref={ref => (this._topBlock = ref)} />
        <TopPanel />
        <Projects projects={this.props.projects} />
        <ServiceList />
        <Articles />
        <Footer />
      </div>
    )
  }
}
