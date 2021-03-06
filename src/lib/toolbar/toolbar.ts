import {
  Component,
  ChangeDetectionStrategy,
  ViewEncapsulation,
  Directive,
  ElementRef,
  Renderer2,
} from '@angular/core';
import {CanColor, mixinColor} from '../core/common-behaviors/color';


@Directive({
  selector: 'md-toolbar-row, mat-toolbar-row',
  host: {
    '[class.mat-toolbar-row]': 'true',
  },
})
export class MdToolbarRow {}

// Boilerplate for applying mixins to MdToolbar.
export class MdToolbarBase {
  constructor(public _renderer: Renderer2, public _elementRef: ElementRef) {}
}
export const _MdToolbarMixinBase = mixinColor(MdToolbarBase);


@Component({
  moduleId: module.id,
  selector: 'md-toolbar, mat-toolbar',
  templateUrl: 'toolbar.html',
  styleUrls: ['toolbar.css'],
  inputs: ['color'],
  host: {
    '[class.mat-toolbar]': 'true',
    'role': 'toolbar'
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class MdToolbar extends _MdToolbarMixinBase implements CanColor {

  constructor(renderer: Renderer2, elementRef: ElementRef) {
    super(renderer, elementRef);
  }

}
