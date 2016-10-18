<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Link extends Model
{
    public $timestamps = false;

    protected $fillable = ['url', 'alias', 'clicks', 'created_at'];

}
