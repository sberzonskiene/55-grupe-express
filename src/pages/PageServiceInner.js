import { PageTemplate } from "../template/PageTemplate.js";

export class PageServiceInner extends PageTemplate {
    constructor(req) {
        super(req);
    }

    main() {
        return `
            <section class="container">
                <div class="row">
                    <div class="col-12">
                        <h1>Service "${this.req.params.service}"</h1>
                        <a href="/services">Back to services list</a>
                    </div>
                </div>
            </section>`;
    }
}