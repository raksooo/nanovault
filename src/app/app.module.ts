import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {WelcomeComponent} from "./welcome/welcome.component";
import {AppRoutingModule} from "./app-routing.module";
import {UtilService} from "./services/util.service";
import {WalletService} from "./services/wallet.service";
import {ConfigureWalletComponent} from "./components/configure-wallet/configure-wallet.component";
import {NotificationService} from "./services/notification.service";
import {NotificationsComponent} from "./components/notifications/notifications.component";
import {RaiPipe} from "./pipes/rai.pipe";
import {AccountsComponent} from "./components/accounts/accounts.component";
import {ApiService} from "./services/api.service";
import {AddressBookService} from "./services/address-book.service";
import {SendComponent} from "./components/send/send.component";
import {SqueezePipe} from "./pipes/squeeze.pipe";
import {ModalService} from "./services/modal.service";
import {AddressBookComponent} from "./components/address-book/address-book.component";
import {AccountViewerComponent} from "./components/account-viewer/account-viewer.component";
import {ClipboardModule} from "ngx-clipboard";
import {ReceiveComponent} from "./components/receive/receive.component";
import {HistoryComponent} from "./components/history/history.component";
import {WalletWidgetComponent} from "./components/wallet-widget/wallet-widget.component";
import {ManageWalletComponent} from "./components/manage-wallet/manage-wallet.component";
import {WorkPoolService} from "./services/work-pool.service";


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ConfigureWalletComponent,
    NotificationsComponent,
    RaiPipe,
    SqueezePipe,
    AccountsComponent,
    SendComponent,
    AddressBookComponent,
    AccountViewerComponent,
    ReceiveComponent,
    HistoryComponent,
    WalletWidgetComponent,
    ManageWalletComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    ClipboardModule
  ],
  providers: [
    UtilService,
    WalletService,
    NotificationService,
    ApiService,
    AddressBookService,
    ModalService,
    WorkPoolService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }