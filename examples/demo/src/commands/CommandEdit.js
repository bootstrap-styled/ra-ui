import React from 'react';
import {
    AutocompleteInput,
    BooleanInput,
    DateInput,
    ReferenceInput,
    SelectInput,
    SimpleForm,
    TitleForRecord,
} from '@bootstrap-styled/ra-ui';
import { translate, EditController } from 'react-admin';

import Card from '@bootstrap-styled/v4/lib/Cards/Card';

import Basket from './Basket';

const CommandTitle = translate(({ record, translate }) => (
    <span>
        {translate('resources.commands.name', { smart_count: 1 })} #{
            record.reference
        }
    </span>
));

const CommandEdit = ({ ...props }) => (
    <EditController title={<CommandTitle />} {...props}>
        {controllerProps =>
            controllerProps.record ? (
                <div>
                    <Card>
                        <TitleForRecord
                            defaultTitle={controllerProps.defaultTitle}
                            record={controllerProps.record}
                        />
                        <SimpleForm {...controllerProps}>
                            <DateInput source="date" />
                            <ReferenceInput
                                source="customer_id"
                                reference="customers"
                            >
                                <AutocompleteInput
                                    optionText={choice =>
                                        `${choice.first_name} ${
                                            choice.last_name
                                        }`
                                    }
                                />
                            </ReferenceInput>
                            <SelectInput
                                source="status"
                                choices={[
                                    { id: 'delivered', name: 'delivered' },
                                    { id: 'ordered', name: 'ordered' },
                                    { id: 'cancelled', name: 'cancelled' },
                                    { id: 'unknown', name: 'unknown', disabled: true },
                                ]}
                            />
                            <BooleanInput source="returned" />
                        </SimpleForm>
                    </Card>
                    <Basket record={controllerProps.record} />
                </div>
            ) : (
                ''
            )
        }
    </EditController>
);

export default CommandEdit;
