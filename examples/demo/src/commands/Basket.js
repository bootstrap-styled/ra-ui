import React, { Component } from 'react';
import { connect } from 'react-redux';

import Table from '@bootstrap-styled/v4/lib/Table';
import Tbody from '@bootstrap-styled/v4/lib/Table/Tbody';
import Td from '@bootstrap-styled/v4/lib/Table/Td';
import Th from '@bootstrap-styled/v4/lib/Table/Th';
import Thead from '@bootstrap-styled/v4/lib/Table/Thead';
import Tr from '@bootstrap-styled/v4/lib/Table/Tr';

import Paper from '@material-ui/core/Paper';
import { Link, translate, crudGetMany as crudGetManyAction } from 'react-admin';
import compose from 'recompose/compose';

// const styles = {
//     container: { width: '35em' },
//     rightAlignedCell: { textAlign: 'right' },
//     boldCell: { fontWeight: 'bold' },
// };

class Basket extends Component {
    componentDidMount() {
        this.fetchData();
    }
    fetchData() {
        const {
            record: { basket },
            crudGetMany,
        } = this.props;
        crudGetMany('products', basket.map(item => item.product_id));
    }
    render() {
        const { record, products, translate } = this.props;
        const { basket } = record;
        return (
            <Paper>
                <Table>
                    <Thead>
                        <Tr>
                            <Th>
                                {translate(
                                    'resources.commands.fields.basket.reference'
                                )}
                            </Th>
                            <Th>
                                {translate(
                                    'resources.commands.fields.basket.unit_price'
                                )}
                            </Th>
                            <Th>
                                {translate(
                                    'resources.commands.fields.basket.quantity'
                                )}
                            </Th>
                            <Th>
                                {translate(
                                    'resources.commands.fields.basket.total'
                                )}
                            </Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {basket.map(
                            item =>
                                products[item.product_id] && (
                                    <Tr key={item.product_id}>
                                        <Td>
                                            <Link
                                                to={`/products/${
                                                    item.product_id
                                                }`}
                                            >
                                                {
                                                    products[item.product_id]
                                                        .reference
                                                }
                                            </Link>
                                        </Td>
                                        <Td>
                                            {products[
                                                item.product_id
                                            ].price.toLocaleString(undefined, {
                                                style: 'currency',
                                                currency: 'USD',
                                            })}
                                        </Td>
                                        <Td>
                                            {item.quantity}
                                        </Td>
                                        <Td>
                                            {(
                                                products[item.product_id]
                                                    .price * item.quantity
                                            ).toLocaleString(undefined, {
                                                style: 'currency',
                                                currency: 'USD',
                                            })}
                                        </Td>
                                    </Tr>
                                )
                        )}
                        <Tr>
                            <Td colSpan={2} />
                            <Td>
                                {translate(
                                    'resources.commands.fields.basket.sum'
                                )}
                            </Td>
                            <Td>
                                {record.total_ex_taxes.toLocaleString(
                                    undefined,
                                    { style: 'currency', currency: 'USD' }
                                )}
                            </Td>
                        </Tr>
                        <Tr>
                            <Td colSpan={2} />
                            <Td>
                                {translate(
                                    'resources.commands.fields.basket.delivery'
                                )}
                            </Td>
                            <Td>
                                {record.delivery_fees.toLocaleString(
                                    undefined,
                                    { style: 'currency', currency: 'USD' }
                                )}
                            </Td>
                        </Tr>
                        <Tr>
                            <Td colSpan={2} />
                            <Td>
                                {translate(
                                    'resources.commands.fields.basket.tax_rate'
                                )}
                            </Td>
                            <Td>
                                {record.tax_rate.toLocaleString(undefined, {
                                    style: 'percent',
                                })}
                            </Td>
                        </Tr>
                        <Tr>
                            <Td colSpan={2} />
                            <Td>
                                {translate(
                                    'resources.commands.fields.basket.total'
                                )}
                            </Td>
                            <Td>
                                {record.total.toLocaleString(undefined, {
                                    style: 'currency',
                                    currency: 'USD',
                                })}
                            </Td>
                        </Tr>
                    </Tbody>
                </Table>
            </Paper>
        );
    }
}

const mapStateToProps = (state, props) => {
    const {
        record: { basket },
    } = props;
    const productIds = basket.map(item => item.product_id);
    return {
        products: productIds
            .map(productId => state.admin.resources.products.data[productId])
            .filter(r => typeof r !== 'undefined')
            .reduce((prev, next) => {
                prev[next.id] = next;
                return prev;
            }, {}),
    };
};

const enhance = compose(
    translate,
    connect(
        mapStateToProps,
        {
            crudGetMany: crudGetManyAction,
        }
    )
);

export default enhance(Basket);
