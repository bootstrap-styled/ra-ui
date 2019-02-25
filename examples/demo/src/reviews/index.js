import React from 'react';
import {
    AutocompleteInput,
    BulkActions,
    BulkDeleteAction,
    Datagrid,
    DateField,
    DateInput,
    Edit,
    EditButton,
    Filter,
    List,
    LongTextInput,
    ReferenceField,
    ReferenceInput,
    Responsive,
    SearchInput,
    SelectInput,
    SimpleForm,
    TextField,
} from 'react-admin';
import Icon from '@material-ui/icons/Comment';

import ProductReferenceField from '../products/ProductReferenceField';
import CustomerReferenceField from '../visitors/CustomerReferenceField';
import StarRatingField from './StarRatingField';
import ApproveButton from './ApproveButton';
import ReviewEditActions from './ReviewEditActions';
import BulkApproveAction from './BulkApproveAction';
import BulkRejectAction from './BulkRejectAction';
import rowStyle from './rowStyle';
import MobileGrid from './MobileGrid';

export const ReviewIcon = Icon;

export const ReviewFilter = (
    ({ ...props }) => (
        <Filter {...props}>
            <SearchInput source="q" alwaysOn />
            <SelectInput
                source="status"
                choices={[
                    { id: 'accepted', name: 'Accepted' },
                    { id: 'pending', name: 'Pending' },
                    { id: 'rejected', name: 'Rejected' },
                ]}
            />
            <ReferenceInput source="customer_id" reference="customers">
                <AutocompleteInput
                    optionText={choice =>
                        `${choice.first_name} ${choice.last_name}`
                    }
                />
            </ReferenceInput>
            <ReferenceInput source="product_id" reference="products">
                <AutocompleteInput optionText="reference" />
            </ReferenceInput>
            <DateInput source="date_gte" />
            <DateInput source="date_lte" />
        </Filter>
    )
);
//
// const listStyles = {
//     headerRow: {
//         borderLeftColor: 'white',
//         borderLeftWidth: 5,
//         borderLeftStyle: 'solid',
//     },
//     comment: {
//         maxWidth: '18em',
//         overflow: 'hidden',
//         textOverflow: 'ellipsis',
//         whiteSpace: 'nowrap',
//     },
// };

const ReviewsBulkActions = props => (
    <BulkActions {...props}>
        <BulkApproveAction label="resources.reviews.action.accept" />
        <BulkRejectAction label="resources.reviews.action.reject" />
        <BulkDeleteAction />
    </BulkActions>
);

export const ReviewList = ({ ...props }) => (
    <List
        {...props}
        bulkActions={<ReviewsBulkActions />}
        filters={<ReviewFilter />}
        perPage={25}
        sort={{ field: 'date', order: 'DESC' }}
    >
        <Responsive
            xsmall={<MobileGrid />}
            medium={
                <Datagrid
                    rowStyle={rowStyle}
                >
                    <DateField source="date" />
                    <CustomerReferenceField />
                    <ProductReferenceField />
                    <StarRatingField />
                    <TextField
                        source="comment"
                    />
                    <TextField source="status" />
                    <ApproveButton />
                    <EditButton />
                </Datagrid>
            }
        />
    </List>
);

// const editStyle = {
//     detail: {
//         display: 'inline-block',
//         verticalAlign: 'top',
//         marginRight: '2em',
//         minWidth: '8em',
//     },
// };
export const ReviewEdit = ({ ...props }) => (
    <Edit {...props} actions={<ReviewEditActions />}>
        <SimpleForm>
            <DateField source="date" />
            <CustomerReferenceField />
            <ProductReferenceField />
            <ReferenceField
                source="command_id"
                reference="commands"
                addLabel
            >
                <TextField source="reference" />
            </ReferenceField>
            <StarRatingField />
            <LongTextInput source="comment" />
            <SelectInput
                source="status"
                choices={[
                    { id: 'accepted', name: 'Accepted' },
                    { id: 'pending', name: 'Pending' },
                    { id: 'rejected', name: 'Rejected' },
                ]}
            />
        </SimpleForm>
    </Edit>
);
