'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">nest-app documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                        <li class="link">
                            <a href="changelog.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>CHANGELOG
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                        <li class="link">
                            <a href="todo.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>TODO
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AppModule-3857f075c424ff336ae8a05b0d5752e3bd1398cebd3b2ee9dc055f3b4c43b7de1f737738bdbd5e06cec5174735f8a236344c1f85571cf5e76885a12f491db881"' : 'data-target="#xs-controllers-links-module-AppModule-3857f075c424ff336ae8a05b0d5752e3bd1398cebd3b2ee9dc055f3b4c43b7de1f737738bdbd5e06cec5174735f8a236344c1f85571cf5e76885a12f491db881"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-3857f075c424ff336ae8a05b0d5752e3bd1398cebd3b2ee9dc055f3b4c43b7de1f737738bdbd5e06cec5174735f8a236344c1f85571cf5e76885a12f491db881"' :
                                            'id="xs-controllers-links-module-AppModule-3857f075c424ff336ae8a05b0d5752e3bd1398cebd3b2ee9dc055f3b4c43b7de1f737738bdbd5e06cec5174735f8a236344c1f85571cf5e76885a12f491db881"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-3857f075c424ff336ae8a05b0d5752e3bd1398cebd3b2ee9dc055f3b4c43b7de1f737738bdbd5e06cec5174735f8a236344c1f85571cf5e76885a12f491db881"' : 'data-target="#xs-injectables-links-module-AppModule-3857f075c424ff336ae8a05b0d5752e3bd1398cebd3b2ee9dc055f3b4c43b7de1f737738bdbd5e06cec5174735f8a236344c1f85571cf5e76885a12f491db881"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-3857f075c424ff336ae8a05b0d5752e3bd1398cebd3b2ee9dc055f3b4c43b7de1f737738bdbd5e06cec5174735f8a236344c1f85571cf5e76885a12f491db881"' :
                                        'id="xs-injectables-links-module-AppModule-3857f075c424ff336ae8a05b0d5752e3bd1398cebd3b2ee9dc055f3b4c43b7de1f737738bdbd5e06cec5174735f8a236344c1f85571cf5e76885a12f491db881"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AuthModule-cc8bdc565f94298dfde14b3d646435910132f16df994ebf0fd0a6ec8a1555ae745728f21c467859c1aa4e2f440b7b68a8e39a05055e1e163c6409f03c76c8ab8"' : 'data-target="#xs-controllers-links-module-AuthModule-cc8bdc565f94298dfde14b3d646435910132f16df994ebf0fd0a6ec8a1555ae745728f21c467859c1aa4e2f440b7b68a8e39a05055e1e163c6409f03c76c8ab8"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-cc8bdc565f94298dfde14b3d646435910132f16df994ebf0fd0a6ec8a1555ae745728f21c467859c1aa4e2f440b7b68a8e39a05055e1e163c6409f03c76c8ab8"' :
                                            'id="xs-controllers-links-module-AuthModule-cc8bdc565f94298dfde14b3d646435910132f16df994ebf0fd0a6ec8a1555ae745728f21c467859c1aa4e2f440b7b68a8e39a05055e1e163c6409f03c76c8ab8"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AuthModule-cc8bdc565f94298dfde14b3d646435910132f16df994ebf0fd0a6ec8a1555ae745728f21c467859c1aa4e2f440b7b68a8e39a05055e1e163c6409f03c76c8ab8"' : 'data-target="#xs-injectables-links-module-AuthModule-cc8bdc565f94298dfde14b3d646435910132f16df994ebf0fd0a6ec8a1555ae745728f21c467859c1aa4e2f440b7b68a8e39a05055e1e163c6409f03c76c8ab8"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-cc8bdc565f94298dfde14b3d646435910132f16df994ebf0fd0a6ec8a1555ae745728f21c467859c1aa4e2f440b7b68a8e39a05055e1e163c6409f03c76c8ab8"' :
                                        'id="xs-injectables-links-module-AuthModule-cc8bdc565f94298dfde14b3d646435910132f16df994ebf0fd0a6ec8a1555ae745728f21c467859c1aa4e2f440b7b68a8e39a05055e1e163c6409f03c76c8ab8"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/JwtStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JwtStrategy</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/BagModule.html" data-type="entity-link" >BagModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-BagModule-ee417947a801469a9f06531b0bd95ab9ea4bfc9803c059503f63c09dde864699fbaeb0eafaee73306249e5b1ead4f99e02c91a5a2e0bfa7a626422d80312eab3"' : 'data-target="#xs-controllers-links-module-BagModule-ee417947a801469a9f06531b0bd95ab9ea4bfc9803c059503f63c09dde864699fbaeb0eafaee73306249e5b1ead4f99e02c91a5a2e0bfa7a626422d80312eab3"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-BagModule-ee417947a801469a9f06531b0bd95ab9ea4bfc9803c059503f63c09dde864699fbaeb0eafaee73306249e5b1ead4f99e02c91a5a2e0bfa7a626422d80312eab3"' :
                                            'id="xs-controllers-links-module-BagModule-ee417947a801469a9f06531b0bd95ab9ea4bfc9803c059503f63c09dde864699fbaeb0eafaee73306249e5b1ead4f99e02c91a5a2e0bfa7a626422d80312eab3"' }>
                                            <li class="link">
                                                <a href="controllers/BagController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BagController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-BagModule-ee417947a801469a9f06531b0bd95ab9ea4bfc9803c059503f63c09dde864699fbaeb0eafaee73306249e5b1ead4f99e02c91a5a2e0bfa7a626422d80312eab3"' : 'data-target="#xs-injectables-links-module-BagModule-ee417947a801469a9f06531b0bd95ab9ea4bfc9803c059503f63c09dde864699fbaeb0eafaee73306249e5b1ead4f99e02c91a5a2e0bfa7a626422d80312eab3"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-BagModule-ee417947a801469a9f06531b0bd95ab9ea4bfc9803c059503f63c09dde864699fbaeb0eafaee73306249e5b1ead4f99e02c91a5a2e0bfa7a626422d80312eab3"' :
                                        'id="xs-injectables-links-module-BagModule-ee417947a801469a9f06531b0bd95ab9ea4bfc9803c059503f63c09dde864699fbaeb0eafaee73306249e5b1ead4f99e02c91a5a2e0bfa7a626422d80312eab3"' }>
                                        <li class="link">
                                            <a href="injectables/BagService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BagService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/CategoryModule.html" data-type="entity-link" >CategoryModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-CategoryModule-7de02d697ae462bc56f8ae9d71421959c1e553d0c0af1f5c160166880ccde9b89f5cbd96fd14fb0dffc19995dd6be63ef9d1e6faee53f04fd035ec1d9cefdd48"' : 'data-target="#xs-controllers-links-module-CategoryModule-7de02d697ae462bc56f8ae9d71421959c1e553d0c0af1f5c160166880ccde9b89f5cbd96fd14fb0dffc19995dd6be63ef9d1e6faee53f04fd035ec1d9cefdd48"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-CategoryModule-7de02d697ae462bc56f8ae9d71421959c1e553d0c0af1f5c160166880ccde9b89f5cbd96fd14fb0dffc19995dd6be63ef9d1e6faee53f04fd035ec1d9cefdd48"' :
                                            'id="xs-controllers-links-module-CategoryModule-7de02d697ae462bc56f8ae9d71421959c1e553d0c0af1f5c160166880ccde9b89f5cbd96fd14fb0dffc19995dd6be63ef9d1e6faee53f04fd035ec1d9cefdd48"' }>
                                            <li class="link">
                                                <a href="controllers/CategoryController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CategoryController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-CategoryModule-7de02d697ae462bc56f8ae9d71421959c1e553d0c0af1f5c160166880ccde9b89f5cbd96fd14fb0dffc19995dd6be63ef9d1e6faee53f04fd035ec1d9cefdd48"' : 'data-target="#xs-injectables-links-module-CategoryModule-7de02d697ae462bc56f8ae9d71421959c1e553d0c0af1f5c160166880ccde9b89f5cbd96fd14fb0dffc19995dd6be63ef9d1e6faee53f04fd035ec1d9cefdd48"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CategoryModule-7de02d697ae462bc56f8ae9d71421959c1e553d0c0af1f5c160166880ccde9b89f5cbd96fd14fb0dffc19995dd6be63ef9d1e6faee53f04fd035ec1d9cefdd48"' :
                                        'id="xs-injectables-links-module-CategoryModule-7de02d697ae462bc56f8ae9d71421959c1e553d0c0af1f5c160166880ccde9b89f5cbd96fd14fb0dffc19995dd6be63ef9d1e6faee53f04fd035ec1d9cefdd48"' }>
                                        <li class="link">
                                            <a href="injectables/CategoryService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CategoryService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PrismaModule.html" data-type="entity-link" >PrismaModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-PrismaModule-8a45c52f5bc506f9fcef1f4c7b34e596b06323bae0951c4fe354cc2b76489f6abcf1207439120a4bd3a6cf40174b139cda70f7a558a3f53d9bcdd3a9e74b81bf"' : 'data-target="#xs-injectables-links-module-PrismaModule-8a45c52f5bc506f9fcef1f4c7b34e596b06323bae0951c4fe354cc2b76489f6abcf1207439120a4bd3a6cf40174b139cda70f7a558a3f53d9bcdd3a9e74b81bf"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PrismaModule-8a45c52f5bc506f9fcef1f4c7b34e596b06323bae0951c4fe354cc2b76489f6abcf1207439120a4bd3a6cf40174b139cda70f7a558a3f53d9bcdd3a9e74b81bf"' :
                                        'id="xs-injectables-links-module-PrismaModule-8a45c52f5bc506f9fcef1f4c7b34e596b06323bae0951c4fe354cc2b76489f6abcf1207439120a4bd3a6cf40174b139cda70f7a558a3f53d9bcdd3a9e74b81bf"' }>
                                        <li class="link">
                                            <a href="injectables/PrismaService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PrismaService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ProductModule.html" data-type="entity-link" >ProductModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-ProductModule-030879b449e9a8af0e11cc92884f6540b248e2b34cd534c26c99cfb98819dff7ddcd96807a25af8f318725cc6a1134a2d59aa639f577d74538150110b2cbe236"' : 'data-target="#xs-controllers-links-module-ProductModule-030879b449e9a8af0e11cc92884f6540b248e2b34cd534c26c99cfb98819dff7ddcd96807a25af8f318725cc6a1134a2d59aa639f577d74538150110b2cbe236"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ProductModule-030879b449e9a8af0e11cc92884f6540b248e2b34cd534c26c99cfb98819dff7ddcd96807a25af8f318725cc6a1134a2d59aa639f577d74538150110b2cbe236"' :
                                            'id="xs-controllers-links-module-ProductModule-030879b449e9a8af0e11cc92884f6540b248e2b34cd534c26c99cfb98819dff7ddcd96807a25af8f318725cc6a1134a2d59aa639f577d74538150110b2cbe236"' }>
                                            <li class="link">
                                                <a href="controllers/ProductController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-ProductModule-030879b449e9a8af0e11cc92884f6540b248e2b34cd534c26c99cfb98819dff7ddcd96807a25af8f318725cc6a1134a2d59aa639f577d74538150110b2cbe236"' : 'data-target="#xs-injectables-links-module-ProductModule-030879b449e9a8af0e11cc92884f6540b248e2b34cd534c26c99cfb98819dff7ddcd96807a25af8f318725cc6a1134a2d59aa639f577d74538150110b2cbe236"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ProductModule-030879b449e9a8af0e11cc92884f6540b248e2b34cd534c26c99cfb98819dff7ddcd96807a25af8f318725cc6a1134a2d59aa639f577d74538150110b2cbe236"' :
                                        'id="xs-injectables-links-module-ProductModule-030879b449e9a8af0e11cc92884f6540b248e2b34cd534c26c99cfb98819dff7ddcd96807a25af8f318725cc6a1134a2d59aa639f577d74538150110b2cbe236"' }>
                                        <li class="link">
                                            <a href="injectables/ProductService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserModule.html" data-type="entity-link" >UserModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-UserModule-da449f5507862dcf93991c306b6b6ea369609b580e58c1ff7d0f726df647b24952822514ca99d4b8ac18dcb22fe802238c3f94bc8765e8c4aac4bf2a625ec733"' : 'data-target="#xs-controllers-links-module-UserModule-da449f5507862dcf93991c306b6b6ea369609b580e58c1ff7d0f726df647b24952822514ca99d4b8ac18dcb22fe802238c3f94bc8765e8c4aac4bf2a625ec733"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UserModule-da449f5507862dcf93991c306b6b6ea369609b580e58c1ff7d0f726df647b24952822514ca99d4b8ac18dcb22fe802238c3f94bc8765e8c4aac4bf2a625ec733"' :
                                            'id="xs-controllers-links-module-UserModule-da449f5507862dcf93991c306b6b6ea369609b580e58c1ff7d0f726df647b24952822514ca99d4b8ac18dcb22fe802238c3f94bc8765e8c4aac4bf2a625ec733"' }>
                                            <li class="link">
                                                <a href="controllers/UserController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-UserModule-da449f5507862dcf93991c306b6b6ea369609b580e58c1ff7d0f726df647b24952822514ca99d4b8ac18dcb22fe802238c3f94bc8765e8c4aac4bf2a625ec733"' : 'data-target="#xs-injectables-links-module-UserModule-da449f5507862dcf93991c306b6b6ea369609b580e58c1ff7d0f726df647b24952822514ca99d4b8ac18dcb22fe802238c3f94bc8765e8c4aac4bf2a625ec733"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UserModule-da449f5507862dcf93991c306b6b6ea369609b580e58c1ff7d0f726df647b24952822514ca99d4b8ac18dcb22fe802238c3f94bc8765e8c4aac4bf2a625ec733"' :
                                        'id="xs-injectables-links-module-UserModule-da449f5507862dcf93991c306b6b6ea369609b580e58c1ff7d0f726df647b24952822514ca99d4b8ac18dcb22fe802238c3f94bc8765e8c4aac4bf2a625ec733"' }>
                                        <li class="link">
                                            <a href="injectables/UserService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#controllers-links"' :
                                'data-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AppController.html" data-type="entity-link" >AppController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/AuthController.html" data-type="entity-link" >AuthController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/BagController.html" data-type="entity-link" >BagController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/CategoryController.html" data-type="entity-link" >CategoryController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/ProductController.html" data-type="entity-link" >ProductController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/UserController.html" data-type="entity-link" >UserController</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Bag.html" data-type="entity-link" >Bag</a>
                            </li>
                            <li class="link">
                                <a href="classes/Category.html" data-type="entity-link" >Category</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateBagDto.html" data-type="entity-link" >CreateBagDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateCategoryDto.html" data-type="entity-link" >CreateCategoryDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateProductDto.html" data-type="entity-link" >CreateProductDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserDto.html" data-type="entity-link" >CreateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoginDto.html" data-type="entity-link" >LoginDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoginResponseDto.html" data-type="entity-link" >LoginResponseDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Product.html" data-type="entity-link" >Product</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateBagDto.html" data-type="entity-link" >UpdateBagDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateCategoryDto.html" data-type="entity-link" >UpdateCategoryDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateProductDto.html" data-type="entity-link" >UpdateProductDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateUserDto.html" data-type="entity-link" >UpdateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/User.html" data-type="entity-link" >User</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AppService.html" data-type="entity-link" >AppService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/BagService.html" data-type="entity-link" >BagService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CategoryService.html" data-type="entity-link" >CategoryService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JwtStrategy.html" data-type="entity-link" >JwtStrategy</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PrismaService.html" data-type="entity-link" >PrismaService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProductService.html" data-type="entity-link" >ProductService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserService.html" data-type="entity-link" >UserService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});