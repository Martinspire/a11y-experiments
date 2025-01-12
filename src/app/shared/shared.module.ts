// Angular Modules
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

// PrimeNG Modules
import { AccordionModule } from 'primeng/accordion';
import { BlockUIModule } from 'primeng/blockui';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CarouselModule } from 'primeng/carousel';
import { CascadeSelectModule } from 'primeng/cascadeselect';
import { CheckboxModule } from 'primeng/checkbox';
import { ColorPickerModule } from 'primeng/colorpicker';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ContextMenuModule } from 'primeng/contextmenu';
import { DataViewModule } from 'primeng/dataview';
import { DatePickerModule } from 'primeng/datepicker';
import { DialogModule } from 'primeng/dialog';
import { DragDropModule } from 'primeng/dragdrop';
import { DrawerModule } from 'primeng/drawer';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { EditorModule } from 'primeng/editor';
import { FieldsetModule } from 'primeng/fieldset';
import { FileUploadModule } from 'primeng/fileupload';
import { FloatLabelModule } from 'primeng/floatlabel';
import { FocusTrapModule } from 'primeng/focustrap';
import { GalleriaModule } from 'primeng/galleria';
import { InplaceModule } from 'primeng/inplace';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputMaskModule } from 'primeng/inputmask';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { KeyFilterModule } from 'primeng/keyfilter';
import { KnobModule } from 'primeng/knob';
import { ListboxModule } from 'primeng/listbox';
import { MegaMenuModule } from 'primeng/megamenu';
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { MessageModule } from 'primeng/message';
import { MessagesModule } from 'primeng/messages';
import { MultiSelectModule } from 'primeng/multiselect';
import { OrderListModule } from 'primeng/orderlist';
import { OrganizationChartModule } from 'primeng/organizationchart';
import { PaginatorModule } from 'primeng/paginator';
import { PanelModule } from 'primeng/panel';
import { PanelMenuModule } from 'primeng/panelmenu';
import { PasswordModule } from 'primeng/password';
import { PickListModule } from 'primeng/picklist';
import { PopoverModule } from 'primeng/popover';
import { ProgressBarModule } from 'primeng/progressbar';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { RadioButtonModule } from 'primeng/radiobutton';
import { RatingModule } from 'primeng/rating';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { SelectModule } from 'primeng/select';
import { SelectButtonModule } from 'primeng/selectbutton';
import { SliderModule } from 'primeng/slider';
import { SplitButtonModule } from 'primeng/splitbutton';
import { StepperModule } from 'primeng/stepper';
import { StepsModule } from 'primeng/steps';
import { TableModule } from 'primeng/table';
import { TerminalModule } from 'primeng/terminal';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { ToastModule } from 'primeng/toast';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { ToggleSwitchModule } from 'primeng/toggleswitch';
import { ToolbarModule } from 'primeng/toolbar';
import { TooltipModule } from 'primeng/tooltip';
import { TreeModule } from 'primeng/tree';
import { TreeTableModule } from 'primeng/treetable';

/**
 * Shared module to import all dependency (Angular and PrimeNG) modules
 *
 * You shouldn't really need to use this in standalone, but by importing you get everything. And because it is present, you will be able to import any of these easily since it is now recognized to be part of the application.
 *
 * You can also use this to look up what modules can be imported
 */

const angularImports = [
  BrowserModule,
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
];

const primeNGImports = [
  AccordionModule,
  BlockUIModule,
  BreadcrumbModule,
  ButtonModule,
  DatePickerModule,
  CardModule,
  CarouselModule,
  CascadeSelectModule,
  CheckboxModule,
  ColorPickerModule,
  ConfirmDialogModule,
  ContextMenuModule,
  DataViewModule,
  DialogModule,
  DragDropModule,
  DrawerModule,
  DynamicDialogModule,
  EditorModule,
  FieldsetModule,
  FileUploadModule,
  FloatLabelModule,
  FocusTrapModule,
  GalleriaModule,
  InplaceModule,
  InputGroupAddonModule,
  InputGroupModule,
  InputMaskModule,
  InputNumberModule,
  InputTextModule,
  KeyFilterModule,
  KnobModule,
  ListboxModule,
  MegaMenuModule,
  MenuModule,
  MenubarModule,
  MessageModule,
  MessagesModule,
  MultiSelectModule,
  OrderListModule,
  OrganizationChartModule,
  PaginatorModule,
  PanelMenuModule,
  PanelModule,
  PasswordModule,
  PickListModule,
  PopoverModule,
  ProgressBarModule,
  ProgressSpinnerModule,
  RadioButtonModule,
  RatingModule,
  ScrollPanelModule,
  SelectModule,
  SelectButtonModule,
  SliderModule,
  SplitButtonModule,
  StepperModule,
  StepsModule,
  TableModule,
  TerminalModule,
  TieredMenuModule,
  ToastModule,
  ToggleButtonModule,
  ToggleSwitchModule,
  ToolbarModule,
  TooltipModule,
  TreeModule,
  TreeTableModule,
];

@NgModule({
  declarations: [],
  imports: [...angularImports, ...primeNGImports],
  exports: [...angularImports, ...primeNGImports],
})
export class SharedModule { }
