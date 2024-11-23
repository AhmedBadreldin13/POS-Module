/** @odoo-module **/
import { patch } from "@web/core/utils/patch";
import { ErrorPopup } from "@point_of_sale/app/errors/popups/error_popup";
import { _t } from "@web/core/l10n/translation";
import { NumberPopup } from "@point_of_sale/app/utils/input_popups/number_popup";
import { Orderline } from "@point_of_sale/app/store/models";

patch(Orderline.prototype, {
    /**
     * @override
     */
    set_discount(discount) {
        const order = this.pos.get_order();
        if (!order) return;

        const product = this.get_product();
        const listPrice = product.lst_price;
        const currentPrice = this.get_unit_price();

        if (currentPrice < listPrice) {
            this.pos.popup.add(ErrorPopup, {
                title: _t("Discount Not Allowed"),
                body: _t("This product already has a pricelist discount applied."),
            });
            return;
        }

        super.set_discount(...arguments);
    },
});
