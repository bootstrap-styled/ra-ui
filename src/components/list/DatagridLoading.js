import React from 'react';

import Table from '@bootstrap-styled/v4/lib/Table';
import Thead from '@bootstrap-styled/v4/lib/Table/Thead';
import Tr from '@bootstrap-styled/v4/lib/Table/Tr';
import Th from '@bootstrap-styled/v4/lib/Table/Th';
import Td from '@bootstrap-styled/v4/lib/Table/Td';
import Tbody from '@bootstrap-styled/v4/lib/Table/Tbody';
import FormGroup from '@bootstrap-styled/v4/lib/Form/FormGroup';
import FormCustom from '@bootstrap-styled/v4/lib/Form/FormCustom';
import Form from '@bootstrap-styled/v4/lib/Form';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import IconButton from '@material-ui/core/IconButton';

const RawPlaceholder = () => (
  <div className="d-flex" style={{ backgroundColor: 'lightgrey' }}>&nbsp;</div>
);

const Placeholder = RawPlaceholder;

const times = (nbChildren, fn) => Array.from({ length: nbChildren }, (_, key) => fn(key));

export default ({
  className,
  expand,
  hasBulkActions,
  nbChildren,
  nbFakeLines = 5,
}) => (
  <Table className={className}>
    <Thead>
      <Tr>
        {expand && <Th />}
        {hasBulkActions && (
          <Th>
            <Form>
              <FormGroup className="mb-0">
                <FormCustom
                  className="select-all cursor-pointer"
                  defaultChecked={false}
                />
              </FormGroup>
            </Form>
          </Th>
        )}
        {times(nbChildren, key => (
          <Th key={key}>
            <Placeholder />
          </Th>
        ))}
      </Tr>
    </Thead>
    <Tbody>
      {times(nbFakeLines, key1 => (
        <Tr key={key1} style={{ opacity: 1 / (key1 + 1) }}>
          {expand && (
            <Td>
              <IconButton
                component="div"
                aria-hidden="true"
              >
                <ExpandMoreIcon />
              </IconButton>
            </Td>
          )}
          {hasBulkActions && (
            <Td>
              <Form>
                <FormGroup className="mb-0">
                  <FormCustom
                    className="select-all"
                    defaultChecked={false}
                  />
                </FormGroup>
              </Form>
            </Td>
          )}
          {times(nbChildren, key2 => (
            <Td key={key2}>
              <Placeholder />
            </Td>
          ))}
        </Tr>
      ))}
    </Tbody>
  </Table>
);
