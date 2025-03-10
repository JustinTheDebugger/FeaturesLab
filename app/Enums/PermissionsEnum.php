<?php 

namespace App\Enums;

use BenSampo\Enum\Enum;

enum PermissionsEnum: string
{
    case ManageFeatures = 'manage_features';
    case ManageUsers = 'manage_users';
    case ManageComments = 'manage_comments';
    case UpvoteDownvote = 'upvote_downvote';
}