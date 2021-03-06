/*
 *
 * ToolsUsed
 *
 */

import { h, Component } from 'preact'

import './style.css'

const ToolsUsed = () => (
  <div className="wifog-tools-used wow fadeIn" data-wow-duration="1s" data-wow-delay="0.5s">
    <div className="wifog-tools-used__name">Tools used:</div>
    <div className="wifog-tools-used__list">
      <div href="#" className="wifog-tools-used__list__elem">
        Sketch
      </div>
      <div href="#" className="wifog-tools-used__list__elem">
        Principle
      </div>
      <div href="#" className="wifog-tools-used__list__elem">
        Framer
      </div>
      <div href="#" className="wifog-tools-used__list__elem">
        Zeplin
      </div>
    </div>
  </div>
)

export default ToolsUsed
