<!-- tooltip s obrazkom priklad -->

<h2>Tooltip with template</h2>

<mat-form-field class="example-user-input">
  <mat-label>Tooltip position</mat-label>
  <mat-select [formControl]="position">
    <mat-option *ngFor="let positionOption of positionOptions" [value]="positionOption">
      {{positionOption}}
    </mat-option>
  </mat-select>
</mat-form-field>

<button mat-raised-button
        [mtxTooltip]="tooltipTpl"
        [mtxTooltipPosition]="position.value"
        aria-label="Button that displays a tooltip in various positions">
  Action
</button>

<ng-template #tooltipTpl>
  <div style="background: red;">
    <img src="https://icons-for-free.com/download-icon-angular-1321215611022593855_256.png" alt="">
</div>
</ng-template>
