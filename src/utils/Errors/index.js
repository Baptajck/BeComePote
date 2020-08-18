import React from 'react';
import { NavLink } from 'react-router-dom';

/**
 * @param  {Object} options
 * @param  {String} param1
 * @param  {String} param2
 * @param  {String} errorItem
 * @param  {{route: String} link
 * @param  {{text: String} link
 * @param  {String} textBefore
 * @param  {String} textAfter
 * @returns  {JSX}
 */
const errorLink = (options = {
  param1: String,
  param2: String,
  errorItem: String,
  link: {
    route: String,
    text: String,
  },
  textBefore: String,
  textAfter: String,
}) => (
  options.param1 === options.param2 ? (
    <p className={`_error--${options.errorItem}`}>{options.textBefore}<NavLink to={options.link.route} className="signIn-error--link">{options.link.text}</NavLink>{options.textAfter}</p>
  ) : ''
);

/**
 * @param  {Object} options
 * @param  {String} param1
 * @param  {String} param2
 * @param  {String} errorItem
 * @param  {String} text
 * @returns  {JSX}
 */
export const errorOrNot = (options = {
  param1: String,
  param2: String,
  errorItem: String,
  text: String,
}) => (
  options.param1 === options.param2 ? (
    <p className={`_error--${options.errorItem}`}>{options.text}</p>
  ) : ''
);

export default errorLink;
