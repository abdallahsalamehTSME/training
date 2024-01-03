import { DataController, ValidationStateEnum } from 'cubes-ui'
import { IUserService } from '../meta/i-user-service'
import { Inject, Service, Singleton, regularExpressions } from 'cubes'
import { IoCLevelsEnum } from '@/control'
import { serviceMap } from '@/service'
import { IUserRepository } from '@/app/repository/meta/i-user-repo'
import { UserDc } from '@/app/presentation/components/def/user-dc'
import { PropType, Ref, reactive, ref } from 'vue'
type validations = {
  states: { name: ValidationStateEnum; email: ValidationStateEnum }
  errorMessages: { name: string[]; email: string[] }
  saved: boolean
}

@Service(IoCLevelsEnum.DEFAULT_0, serviceMap.myUserService.key)
@Singleton
class MyUserService implements IUserService {
  id: string = '1234534'

  dc = new DataController(UserDc)

  validations: validations = reactive({
    states: { name: ValidationStateEnum.unset, email: ValidationStateEnum.unset },
    errorMessages: { name: [], email: [] },
    saved: false
  })

  @Inject() MyUserRepository!: IUserRepository
  createUser(): () => Promise<any> {
    return () =>
      new Promise(async (resolve, reject) => {
        try {
          if (this.validateUser()) {
            //here will be the repository usage
            this.validations.saved = !this.validations.saved
            this.dc.model.deserialize({
              userName: '',
              userEmail: ''
            })
            this.validations.states = { name: ValidationStateEnum.unset, email: ValidationStateEnum.unset }
            resolve('ok')
          } else reject('no')
        } catch (error) {
          console.log(error)
          reject('no')
        }
      })
  }

  validateUser(): boolean {
    const validEmail = regularExpressions.email.test(this.dc.model.userEmail)
    const validName = !!this.dc.model.userName.length
    let isValid = validEmail && validName
    this.validations.states.name = validName ? ValidationStateEnum.valid : ValidationStateEnum.invalid
    this.validations.states.email = validEmail ? ValidationStateEnum.valid : ValidationStateEnum.invalid
    this.validations.errorMessages.name = validName ? [] : ['invalid Name']
    this.validations.errorMessages.email = validEmail ? [] : ['invalid email']
    // this.dc.model
    return isValid
  }

  getUserAsync(): Function {
    return () =>
      new Promise(async (resolve, reject) => {
        try {
          //here will be the repository usage
          resolve('ok')
        } catch (error) {
          console.log(error)
          reject('no')
        }
      })
  }

  getUsersAsync(): Function {
    return () =>
      new Promise(async (resolve, reject) => {
        try {
          resolve([
            {
              userEmail: 'helle@gmail.com',
              userName: 'jason',
              userId: '1'
            },
            {
              userEmail: 'emma@example.com',
              userName: 'emma',
              userId: '2'
            },
            {
              userEmail: 'john@example.com',
              userName: 'john',
              userId: '3'
            },
            {
              userEmail: 'sarah@example.com',
              userName: 'sarah',
              userId: '4'
            },
            {
              userEmail: 'michael@example.com',
              userName: 'michael',
              userId: '5'
            },
            {
              userEmail: 'laura@example.com',
              userName: 'laura',
              userId: '6'
            },
            {
              userEmail: 'alex@example.com',
              userName: 'alex',
              userId: '7'
            },
            {
              userEmail: 'natalie@example.com',
              userName: 'natalie',
              userId: '8'
            },
            {
              userEmail: 'brian@example.com',
              userName: 'brian',
              userId: '9'
            },
            {
              userEmail: 'jessica@example.com',
              userName: 'jessica',
              userId: '10'
            },
            {
              userEmail: 'david@example.com',
              userName: 'david',
              userId: '11'
            },
            {
              userEmail: 'amanda@example.com',
              userName: 'amanda',
              userId: '12'
            },
            {
              userEmail: 'peter@example.com',
              userName: 'peter',
              userId: '13'
            },
            {
              userEmail: 'sophia@example.com',
              userName: 'sophia',
              userId: '14'
            },
            {
              userEmail: 'matthew@example.com',
              userName: 'matthew',
              userId: '15'
            },
            {
              userEmail: 'olivia@example.com',
              userName: 'olivia',
              userId: '16'
            },
            {
              userEmail: 'ryan@example.com',
              userName: 'ryan',
              userId: '17'
            },
            {
              userEmail: 'emily@example.com',
              userName: 'emily',
              userId: '18'
            },
            {
              userEmail: 'nathan@example.com',
              userName: 'nathan',
              userId: '19'
            },
            {
              userEmail: 'hannah@example.com',
              userName: 'hannah',
              userId: '20'
            },
            {
              userEmail: 'jacob@example.com',
              userName: 'jacob',
              userId: '21'
            },
            {
              userEmail: 'samantha@example.com',
              userName: 'samantha',
              userId: '22'
            },
            {
              userEmail: 'ethan@example.com',
              userName: 'ethan',
              userId: '23'
            },
            {
              userEmail: 'grace@example.com',
              userName: 'grace',
              userId: '24'
            },
            {
              userEmail: 'william@example.com',
              userName: 'william',
              userId: '25'
            },
            {
              userEmail: 'ava@example.com',
              userName: 'ava',
              userId: '26'
            },
            {
              userEmail: 'daniel@example.com',
              userName: 'daniel',
              userId: '27'
            },
            {
              userEmail: 'chloe@example.com',
              userName: 'chloe',
              userId: '28'
            },
            {
              userEmail: 'joseph@example.com',
              userName: 'joseph',
              userId: '29'
            },
            {
              userEmail: 'mia@example.com',
              userName: 'mia',
              userId: '30'
            },
            {
              userEmail: 'samuel@example.com',
              userName: 'samuel',
              userId: '31'
            },
            {
              userEmail: 'ella@example.com',
              userName: 'ella',
              userId: '32'
            },
            {
              userEmail: 'benjamin@example.com',
              userName: 'benjamin',
              userId: '33'
            },
            {
              userEmail: 'lily@example.com',
              userName: 'lily',
              userId: '34'
            },
            {
              userEmail: 'andrew@example.com',
              userName: 'andrew',
              userId: '35'
            },
            {
              userEmail: 'victoria@example.com',
              userName: 'victoria',
              userId: '36'
            },
            {
              userEmail: 'jackson@example.com',
              userName: 'jackson',
              userId: '37'
            },
            {
              userEmail: 'zoey@example.com',
              userName: 'zoey',

              userId: '38'
            },
            {
              userEmail: 'aiden@example.com',
              userName: 'aiden',
              userId: '39'
            },
            {
              userEmail: 'madison@example.com',
              userName: 'madison',
              userId: '40'
            },
            {
              userEmail: 'elijah@example.com',
              userName: 'elijah',
              userId: '41'
            },
            {
              userEmail: 'aubrey@example.com',
              userName: 'aubrey',
              userId: '42'
            },
            {
              userEmail: 'sebastian@example.com',
              userName: 'sebastian',
              userId: '43'
            },
            {
              userEmail: 'scarlett@example.com',
              userName: 'scarlett',
              userId: '44'
            },
            {
              userEmail: 'logan@example.com',
              userName: 'logan',
              userId: '45'
            },
            {
              userEmail: 'avery@example.com',
              userName: 'avery',
              userId: '46'
            },
            {
              userEmail: 'dylan@example.com',
              userName: 'dylan',
              userId: '47'
            },
            {
              userEmail: 'zoey@example.com',
              userName: 'zoey',
              userId: '48'
            },
            {
              userEmail: 'lucas@example.com',
              userName: 'lucas',
              userId: '49'
            },
            {
              userEmail: 'harper@example.com',
              userName: 'harper',
              userId: '50'
            }
          ])
        } catch (error) {
          console.log(error)
          reject('no')
        }
      })
  }

  dispose(): void {}
}

export default MyUserService
