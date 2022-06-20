import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {

  value: string = ''
  id: string = ''

  constructor(private router: Router, private activedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    // this.value=this.activedRoute.snapshot.params['value'];
    // this.id=this.activedRoute.snapshot.params['id'];
    console.log(this.activedRoute)

    this.activedRoute.params.subscribe(params => {
      this.value=params['value'];
      this.id=params['id'];

  },(err)=>{
    console.log(err)
  })
}

  refresh(){
    this.router.navigate(['about'],{relativeTo: this.activedRoute});
    console.log(this.activedRoute)

  }

  change(){
    this.router.navigate(['/about/deneme/1'])
  }
}
