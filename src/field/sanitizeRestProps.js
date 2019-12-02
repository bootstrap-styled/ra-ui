import omit from 'lodash/omit';

export default props => omit(props, [
  'addLabel',
  'allowEmpty',
  'basePath',
  'cellClassName',
  'className',
  'formClassName',
  'headerClassName',
  'label',
  'linkType',
  'link',
  'locale',
  'record',
  'resource',
  'sortable',
  'sortBy',
  'source',
  'textAlign',
  'translateChoice',
]);
