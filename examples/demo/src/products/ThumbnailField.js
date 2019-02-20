import React from 'react';

const styles = {
  width: 25,
  maxWidth: 25,
  maxHeight: 25
};

const ThumbnailField =({ record }) => (
    <img src={record.thumbnail} style={styles} alt="" />
);

export default ThumbnailField;
