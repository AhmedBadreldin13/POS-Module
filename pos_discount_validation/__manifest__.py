# -*- coding: utf-8 -*-
{
    'name': "POS Pricelist Discount Restriction",

    'version': '17.0',

    'category': 'Point of Sale',

    'summary': "Prevents manual discounts on products with active pricelist discounts in POS",

    'description': """Point of Sale Pricelist Discount Validation
     Prevents applying manual discounts on products that already have pricelist discounts in POS.
     This helps avoid double discounting and maintains pricing consistency across your point of sale system.""",

    'author': "Ahmed Badreldin",

    'depends': ['point_of_sale'],

    'data': [
    ],

    'assets': {
        'point_of_sale._assets_pos': [
            'pos_discount_validation/static/src/js/DiscountValidation.js',
        ],

    },

}
