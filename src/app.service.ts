import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/user.dto';

@Injectable()
export class AppService {
  async postUser(dto:CreateUserDto){
    let postCrm = await fetch('https://salesautomators-sandbox15.pipedrive.com/v1/persons', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': "Bearer v1u:AQIBAHj-LzTNK2yuuuaLqifzhWb9crUNKTpk4FlQ9rjnXqp_6AE-mSRsNEc-qt-JZF1QvUyHAAAAfjB8BgkqhkiG9w0BBwagbzBtAgEAMGgGCSqGSIb3DQEHATAeBglghkgBZQMEAS4wEQQMGqcEIUgSSD15bcXPAgEQgDtLA6W-OJ_ytVMrWzkVH7tyBFy3C5ZLb1hgRXukifjFKHrPSN0XT5mLYmrNgQAPNro5MhWeqqjIaVI6zA:p9JRqGUAtRfwh6N9Zdpla9Vmk96EffxaRwYsqKIlG53p-1MW30dlNsMzdrNgp_gHSHtsSfx3F9DeG3WMUy3pE_4ga1HnTYwKRxcUISAQZpOmGnlErsz95YYAsFflz1THz5yjoFjozlgvwNUTNRWR5ZmOVXRkHiCw8ZbYnqfSmi1EunillIecyujx38WefgaCYPO1TgZW-zAOqCx9neFNaRKoQ7hIf-HOWDsCcTS6WVy2wwQQFkrn7N8kD6PBJSb5jHs6p2GlNeiIu4K5ysk5ktbfRWHsaPgXxfuY73H9SJZDfwxAk9oP9Q"
      },
      body: JSON.stringify(
        {
            name: dto.name,
            email:[{ "value": dto.email, "primary": dto.primary_email, "label": dto.label_email }],
            phone:[{ "value": dto.phone, "primary": dto.primary_phone, "label": dto.label_phone }],
            postal_address:dto.postal_address
        }
    ),
    });
    return await postCrm.json()
  }
    
  
}
