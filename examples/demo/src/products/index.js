import React from 'react';
import {
    Create,
    Datagrid,
    DateField,
    Edit,
    EditButton,
    Filter,
    FormTab,
    List,
    NumberInput,
    Pagination,
    ReferenceInput,
    ReferenceManyField,
    SearchInput,
    SelectInput,
    TabbedForm,
    TextField,
    TextInput,
    required,
} from '@bootstrap-styled/ra-ui';

import { translate } from 'react-admin';
import Chip from '@material-ui/core/Chip';
import Icon from '@material-ui/icons/Collections';
import RichTextInput from 'ra-input-rich-text';

import CustomerReferenceField from '../visitors/CustomerReferenceField';
import StarRatingField from '../reviews/StarRatingField';
import GridList from './GridList';
import Poster from './Poster';

export const ProductIcon = Icon;

const QuickFilter = translate(
    ({ label, translate }) => (
        <Chip label={translate(label)} />
    )
);

export const ProductFilter = props => (
    <Filter {...props}>
        <SearchInput source="q" alwaysOn />
        <ReferenceInput
            source="category_id"
            reference="categories"
            sort={{ field: 'id', order: 'ASC' }}
        >
            <SelectInput source="name" />
        </ReferenceInput>
        <NumberInput source="width_gte" />
        <NumberInput source="width_lte" />
        <NumberInput source="height_gte" />
        <NumberInput source="height_lte" />
        <QuickFilter
            label="resources.products.fields.stock_lte"
            source="stock_lte"
            defaultValue={10}
        />
    </Filter>
);

export const ProductList = props => (
    <List
        {...props}
        filters={<ProductFilter />}
        perPage={20}
        sort={{ field: 'id', order: 'ASC' }}
    >
        <GridList />
    </List>
);

// const createStyles = {
//     stock: { width: '5em' },
//     price: { width: '5em' },
//     width: { width: '5em' },
//     widthFormGroup: { display: 'inline-block' },
//     height: { width: '5em' },
//     heightFormGroup: { display: 'inline-block', marginLeft: 32 },
// };

export const ProductCreate =
    ({ ...props }) => (
        <Create {...props}>
            <TabbedForm>
                <FormTab label="resources.products.tabs.image">
                    <TextInput
                        autoFocus
                        source="image"
                        options={{ fullWidth: true }}
                        validate={required()}
                    />
                    <TextInput
                        source="thumbnail"
                        options={{ fullWidth: true }}
                        validate={required()}
                    />
                </FormTab>
                <FormTab label="resources.products.tabs.details" path="details">
                    <TextInput source="reference" validate={required()} />
                    <NumberInput
                        source="price"
                        validate={required()}
                    />
                    <NumberInput
                        source="width"
                        validate={required()}
                    />
                    <NumberInput
                        source="height"
                        validate={required()}
                    />
                    <ReferenceInput
                        source="category_id"
                        reference="categories"
                        allowEmpty
                    >
                        <SelectInput source="name" />
                    </ReferenceInput>
                    <NumberInput
                        source="stock"
                        validate={required()}
                    />
                </FormTab>
                <FormTab
                    label="resources.products.tabs.description"
                    path="description"
                >
                    <RichTextInput source="description" addLabel={false} />
                </FormTab>
            </TabbedForm>
        </Create>
);

const ProductTitle = ({ record }) => <span>Poster #{record.reference}</span>;

// const editStyles = {
//     ...createStyles,
//     comment: {
//         maxWidth: '20em',
//         overflow: 'hidden',
//         textOverflow: 'ellipsis',
//         whiteSpace: 'nowrap',
//     },
// };

export const ProductEdit = ({ ...props }) => (
    <Edit {...props} title={<ProductTitle />}>
        <TabbedForm>
            <FormTab label="resources.products.tabs.image">
                <Poster />
                <TextInput source="image" options={{ fullWidth: true }} />
                <TextInput source="thumbnail" options={{ fullWidth: true }} />
            </FormTab>
            <FormTab label="resources.products.tabs.details" path="details">
                <TextInput source="reference" />
                <NumberInput source="price" />
                <NumberInput
                    source="width"
                />
                <NumberInput
                    source="height"
                />
                <ReferenceInput source="category_id" reference="categories">
                    <SelectInput source="name" />
                </ReferenceInput>
                <NumberInput source="stock" />
            </FormTab>
            <FormTab
                label="resources.products.tabs.description"
                path="description"
            >
                <RichTextInput source="description" addLabel={false} />
            </FormTab>
            <FormTab label="resources.products.tabs.reviews" path="reviews">
                <ReferenceManyField
                    reference="reviews"
                    target="product_id"
                    addLabel={false}
                    pagination={<Pagination />}
                >
                    <Datagrid>
                        <DateField source="date" />
                        <CustomerReferenceField />
                        <StarRatingField />
                        <TextField
                            source="comment"
                        />
                        <TextField source="status" />
                        <EditButton />
                    </Datagrid>
                </ReferenceManyField>
            </FormTab>
        </TabbedForm>
    </Edit>
);
