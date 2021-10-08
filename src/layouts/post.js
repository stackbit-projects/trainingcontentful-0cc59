import React from 'react';
import _ from 'lodash';
import moment from 'moment-strftime';

import {Layout} from '../components/index';
import {toStyleObj, withPrefix, htmlToReact, markdownify} from '../utils';

export default class Post extends React.Component {
    render() {
        return (
            <Layout {...this.props}>
              <article className="post post-full">
                <header className="post-header has-gradient outer">
                  {_.get(this.props, 'page.image', null) && (
                  <div className="bg-img" style={toStyleObj('background-image: url(\'' + withPrefix(_.get(this.props, 'page.image', null)) + '\')')}/>
                  )}
                  <div className="inner-sm">
                    <div className="post-meta">
                      <time className="published" dateTime={moment(_.get(this.props, 'page.date', null)).strftime('%Y-%m-%d %H:%M')}>{moment(_.get(this.props, 'page.date', null)).strftime('%B %d, %Y')}</time>
                    </div>
                    <h1 className="post-title">{_.get(this.props, 'page.title', null)}</h1>
                    {_.get(this.props, 'page.subtitle', null) && (
                    <div className="post-subtitle">
                      {htmlToReact(_.get(this.props, 'page.subtitle', null))}
                    </div>
                    )}
                  </div>
                </header>
                <div className="inner-md outer">
                  <div className="post-content">
                    {markdownify(_.get(this.props, 'page.content', null))}
                  </div>
                </div>
              </article>
            </Layout>
        );
    }
}
