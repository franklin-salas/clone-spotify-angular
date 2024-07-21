import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MultimediaService } from '@shared/services/multimedia.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css']
})
export class MediaPlayerComponent implements OnInit,OnDestroy  {
  // @Input() mode: 'small' | 'big' = 'small'
  // @Input() track: TrackModel = { _id: 0, name: '', album: '', url: '', cover: '' };
  @ViewChild('progressBar') progressBar: ElementRef = new ElementRef('')
  state: string = 'paused'
  listObservers$: Array<Subscription> = []

  constructor(public multimediaService: MultimediaService) { }
  ngOnInit(): void {
    const observer1$ = this.multimediaService.playerStatus$
      .subscribe(status => this.state = status)
     this.listObservers$.push(observer1$)
  }
  ngOnDestroy(): void {
    this.listObservers$.forEach(u => u.unsubscribe())
    console.log('🔴🔴🔴🔴🔴🔴🔴 BOOM!');
  }

  
  handlePosition(event: MouseEvent): void {
    const elNative: HTMLElement = this.progressBar.nativeElement
    const { clientX } = event
    const { x, width } = elNative.getBoundingClientRect()
    const clickX = clientX - x //TODO: 1050 - x
    const percentageFromX = (clickX * 100) / width
    console.log(`Click(x): ${percentageFromX}`);
    this.multimediaService.seekAudio(percentageFromX)

  }
  
}
